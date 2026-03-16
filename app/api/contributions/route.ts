import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = "codebyajax";

export async function GET() {
    if (!GITHUB_TOKEN) {
        return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });
    }

    const query = `
    query ($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

    try {
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables: { userName: USERNAME } }),
        });

        const json = await res.json();

        if (json.errors) {
            return NextResponse.json({ error: json.errors[0].message }, { status: 400 });
        }

        const calendar = json.data.user.contributionsCollection.contributionCalendar;
        const weeks = calendar.weeks.map((week: any) => ({
            days: week.contributionDays.map((day: any) => ({
                date: day.date,
                count: day.contributionCount,
            })),
        }));

        return NextResponse.json({ weeks, totalContributions: calendar.totalContributions });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}