let r = Array(15).fill(() => Array(15).fill()).map(x => x());
r[2][2] = r[2][12] = r[12][2] = r[12][12] = r[7][7] = "port";

module.exports = {
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: r,
    SKILL_CAP: 1024,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        if (level % 3 == 1 && level < (90 - 42) * 3 + 42) return 1;
        return 0;
    },
};