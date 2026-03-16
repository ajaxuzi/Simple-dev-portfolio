"use client";
import { useState, useEffect } from "react";

const LEVEL_COLORS = ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#52525b", "#18181b"];

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CELL_SIZE = 10;
const CELL_RADIUS = 2;
const CELL_GAP = 2.5;

interface Day { date: string; count: number; }
interface Week { days: Day[]; }

export default function GitHubContributionGraph() {
  const [weeks, setWeeks] = useState < Week[] > ([]);
  const [tooltip, setTooltip] = useState < { day: Day; x: number; y: number } | null > (null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState < string | null > (null);

  useEffect(() => {
    fetch("/api/contributions")
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setWeeks(data.weeks);

        // Total for current year only
        const now = new Date();
        const yearStart = new Date(now.getFullYear(), 0, 1).toISOString().split("T")[0];
        let yearTotal = 0;
        data.weeks.forEach((week: Week) => {
          week.days.forEach(day => {
            if (day.date >= yearStart) yearTotal += day.count;
          });
        });
        setTotal(yearTotal);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const monthLabels: { wi: number; label: string }[] = [];
  weeks.forEach((week, wi) => {
    const first = week.days[0];
    if (first) {
      const d = new Date(first.date);
      if (d.getDate() <= 7) monthLabels.push({ wi, label: MONTHS[d.getMonth()] });
    }
  });

  if (loading) return <p style={{ opacity: 0.7 }}>Loading your real GitHub activity...</p>;
  if (error) return <p style={{ color: "#ff5555" }}>Error: {error}</p>;

  return (
    <div className="padding p-0! mt-5! select-none">
      <div style={{ overflowX: "auto" }}>
        <div style={{ position: "relative", minWidth: "fit-content" }}>
          {/* Month labels */}
          <div style={{ display: "flex", marginBottom: 4, height: 16, position: "relative" }}>
            {monthLabels.map(({ wi, label }) => (
              <div key={wi} style={{
                position: "absolute",
                left: wi * (CELL_SIZE + CELL_GAP) + 2,
                fontSize: 11,
                color: "inherit",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}>
                {label}
              </div>
            ))}
          </div>

          {/* Graph */}
          <div style={{ display: "flex", gap: CELL_GAP }}>
            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: "flex", flexDirection: "column", gap: CELL_GAP }}>
                {week.days.map((day, di) => {
                  const level = getLevel(day.count);
                  const isFuture = new Date(day.date) > new Date();
                  return (
                    <div
                      key={di}
                      onMouseEnter={(e) => !isFuture && setTooltip({ day, x: e.clientX, y: e.clientY })}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        borderRadius: CELL_RADIUS,
                        background: isFuture ? "transparent" : LEVEL_COLORS[level],
                        border: "1px solid rgba(0,0,0,0.08)",
                        cursor: isFuture ? "default" : "pointer",
                        opacity: isFuture ? 0.3 : 0.7,
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-5">
        <p style={{ fontFamily: "inherit", fontSize: "13px", color: "inherit", opacity: 0.6 }}>
          <span style={{ opacity: 1 }}>{total.toLocaleString()}</span> activities in {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ fontSize: 11, opacity: 0.6 }}>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} style={{ width: CELL_SIZE, height: CELL_SIZE, borderRadius: CELL_RADIUS, background: color, border: "1px solid rgba(0,0,0,0.08)", opacity: 0.7 }} />
          ))}
          <span style={{ fontSize: 11, opacity: 0.6 }}>More</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          position: "fixed",
          left: tooltip.x + 12,
          top: tooltip.y - 36,
          background: "#111",
          border: "1px solid #333",
          borderRadius: 6,
          padding: "6px 10px",
          fontSize: 12,
          color: "#ccc",
          pointerEvents: "none",
          zIndex: 1000000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}>
          <span style={{ color: "#fff", fontWeight: 600 }}>{tooltip.day.count} activit{tooltip.day.count === 1 ? "y" : "ies"}</span>
          {" on "}
          {new Date(tooltip.day.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </div>
      )}
    </div>
  );
}