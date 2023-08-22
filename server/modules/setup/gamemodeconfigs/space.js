module.exports = {
    ARENA_TYPE: "circle",
    SPACE_MODE: true,
    secondaryGameMode: "Space",
    SKILL_CAP: 1024,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        if (level % 3 == 1 && level < (90 - 42) * 3 + 42) return 1;
        return 0;
    },
};