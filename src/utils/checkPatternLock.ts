const getDirection = (from: number, to: number) => {
  const pos = (n: number) => [(n - 1) % 3, Math.floor((n - 1) / 3)];
  const [x1, y1] = pos(from);
  const [x2, y2] = pos(to);
  return [x2 - x1, y2 - y1];
};

export const hasAtLeastTwoTurns = (pattern: number[]): boolean => {
  if (pattern.length < 3) return false;

  let turns = 0;
  let prevDir = getDirection(pattern[0], pattern[1]);

  for (let i = 1; i < pattern.length - 1; i++) {
    const currDir = getDirection(pattern[i], pattern[i + 1]);
    if (currDir[0] !== prevDir[0] || currDir[1] !== prevDir[1]) {
      turns++;
    }
    prevDir = currDir;
    if (turns >= 2) return true;
  }

  return false;
};