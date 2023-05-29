{
    "COMMENT": "This file is autogenerated from th15.v1.00b.asm, please see that file for details.",
    "binhacks": {
        "hook_extending": {
            "addr": "0x44FAC7",
            "code": "E8 [codecave:update_lives] 90",
            "expected": "89 0D 50 74 4E 00"
        },
        "inc_lifefrag": {
            "addr": "0x4FA8D",
            "code": "90",
            "expected": "40"
        },
        "init_lifestate": {
            "addr": "0x43C2AD",
            "code": "E8 [codecave:reset_mm] 90 90 90 90 90",
            "expected": "C7 05 50 74 4E 00 02 00 00 00"
        },
        "init_lifestate_prac": {
            "addr": "0x43C2C2",
            "code": "E8 [codecave:reset_mm_prac] 90 90 90 90 90",
            "expected": "C7 05 50 74 4E 00 09 00 00 00"
        },
        "lifefrag_skip": {
            "addr": "0x44FA95",
            "code": "E8 [codecave:skip_life_fragments] 83 3D 10 74 4E 00 04",
            "expected": "83 3D 10 74 4E 00 04 A3 54 74 4E 00"
        },
        "treat_as_ml": {
            "addr": "0x44FA68",
            "code": "E8 [codecave:treat_as_max_lives]",
            "expected": "83 F9 08 7C 15"
        }
    },
    "codecaves": {
        "reset_mm": {
            "access": "wre",
            "code": "50 // 53 // 51 // B9 50 74 4E 00 // BB 02 00 00 00 // B8 <option:max_miss_count> // 39 D8 // 0F 8D 0C 00 00 00 // 89 C3 // B8 00 00 00 00 // A3 <codecave:extends_remain> // 0F 8C 07 00 00 00 // 29 D8 // A3 <codecave:extends_remain> // 89 19 // 59 // 5B // 58 // C3"
        },
        "reset_mm_prac": {
            "access": "wre",
            "code": "50 // 53 // 51 // B9 50 74 4E 00 // BB 09 00 00 00 // B8 <option:max_miss_count> // 39 D8 // 0F 8D 0C 00 00 00 // 89 C3 // B8 00 00 00 00 // A3 <codecave:extends_remain> // 0F 8C 07 00 00 00 // 29 D8 // A3 <codecave:extends_remain> // 89 19 // 59 // 5B // 58 // C3"
        },
        "skip_life_fragments": {
            "access": "wre",
            "code": "50 // 53 // 51 // 8B 1D <codecave:extends_remain> // 83 FB 00 // 0F 84 08 00 00 00 // B9 54 74 4E 00 // 89 01 // 59 // 5B // 58 // C3"
        },
        "treat_as_max_lives": {
            "access": "wre",
            "code": "51 // 83 F9 08 // 8B 0D <codecave:extends_remain> // 0F 8D 12 00 00 00 // 83 F9 00 // 0F 8E 09 00 00 00 // B9 82 FA 44 00 // 89 4C 24 04 // 59 // C3"
        },
        "update_lives": {
            "access": "wre",
            "code": "53 // 51 // 52 // 8B 1D <codecave:extends_remain> // 83 FB 00 // 0F 84 0F 00 00 00 // BA 50 74 4E 00 // 4B // 89 1D <codecave:extends_remain> // 89 0A // 5A // 59 // 5B // C3"
        }
    }
}