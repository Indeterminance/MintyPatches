{
    "COMMENT": "Help.",
    "binhacks": {
		"Display all text as sixes": {
			"addr": "0x401510",
			"expected": "8A 11 88 14 0F 41 84 D2 75 F6",
			"code": "E8 [codecave:compute_true_history] 90 90 90 90 90",
			"ignore":0
		},
		"Hook into attempts loop": {
			"addr": "0x40C5BF",
			"expected": "8B 8C 10 F0 06 00 00",
			"code": "E8 [codecave:Attempts_capture] 90 90",
			"ignore":0
		},
		"Hook into caps loop": {
			"addr": "0x40C5C8",
			"expected": "8B 90 EC 06 00 00",
			"code": "E8 [codecave:Caps_capture] 90",
			"ignore":0
		},
		"Use / key to select a spell to set": {
			"addr": "0x419F47",
			"expected": "C3 CC CC CC CC CC",
			"code": "E8 [codecave:Select_tracked_spell] C3",
			"enable": "<option:Sets_enabled>"
		},
		"Update set captures": {
			"addr": "0x40CE62",
			"expected": "89 88 80 00 00 00",
			"code": "E8 [codecave:Update_set_captures] 90",
			"enable": "<option:Sets_enabled>"
		},
		"Update set attempts": {
			"addr": "0x40C759",
			"expected": "89 91 84 00 00 00",
			"code": "E8 [codecave:Update_set_attempts] 90",
			"enable": "<option:Sets_enabled>"
		},
		"Pull spell ID from thcrap breakpoint": {
			"addr": "0x415BF6",
			"expected": "83 8B 04 15 00 00 01",
			"code": "E8 [codecave:Get_thcrap_spell_id] 90 90",
			"enable": "<option:Sets_enabled>"
		}
    },
	"codecaves": {
		"Reroute_strings": {
			"code": "8A 11 84 D2 74 02 b2 4D 88 14 0f 41 84 D2 75 F0 B9 10 15 40 00 C3",
			"access": "wre"
		},
		"Attempts_capture": {
			"code": "8B 8C 10 F0 06 00 00 89 0D <codecave:Attempts> C3",
			"access": "wre"
		},
		"Caps_capture": {
			"code": "8B 90 EC 06 00 00 89 15 <codecave:Captures> C3",
			"access": "wre"
		},
		"compute_true_history": {
			"code": "50 53 51 52 6A 00 A1 <codecave:Attempts> BA 00 00 00 00 B9 0A 00 00 00 F7 F1 83 C2 30 52 85 C0 0F 85 E8 FF FF FF 83 3D <codecave:Attempts> 09 0F 8F 02 00 00 00 6A 30 6A 2F A1 <codecave:Captures> BA 00 00 00 00 B9 0A 00 00 00 F7 F1 83 C2 30 52 85 C0 0F 85 E8 FF FF FF 83 3D <codecave:Captures> 09 0F 8F 02 00 00 00 6A 30 8D 1D <codecave:Manual_string> 58 88 03 43 80 7B FF 00 0F 85 F2 FF FF FF 5A 59 5B 58 E9 [codecave:compare_histories]",
			"access": "wre"
		},
		"Select_tracked_spell": {
			"code": "50 A1 <codecave:dinput8_handle> 8A 80 8D 02 03 00 3C 80 58 0F 85 37 00 00 00 50 53 A1 <codecave:base_tsa_spell_real> A3 <codecave:Tracked_spell> C7 05 <codecave:Set_captures> 00 00 00 00 C7 05 <codecave:Set_attempts> 00 00 00 00 8B 1D 10 57 4A 00 6B DB 03 03 1D 14 57 4A 00 89 1D <codecave:Set_shottype> 5B 58 C3",
			"access": "wre"
		},
		"Update_set_attempts": {
			"code": "89 91 84 00 00 00 50 53 A1 <codecave:base_tsa_spell_real> 39 05 <codecave:Tracked_spell> 0F 85 25 00 00 00 A1 20 57 4A 00 A1 10 57 4A 00 6B C0 03 03 05 14 57 4A 00 39 05 <codecave:Set_shottype> 0F 85 06 00 00 00 FF 05 <codecave:Set_attempts> 5B 58 C3",
			"access": "wre"
		},
		"Update_set_captures": {
			"code": "89 88 80 00 00 00 50 53 A1 <codecave:base_tsa_spell_real> 39 05 <codecave:Tracked_spell> 0F 85 25 00 00 00 A1 20 57 4A 00 A1 10 57 4A 00 6B C0 03 03 05 14 57 4A 00 39 05 <codecave:Set_shottype> 0F 85 06 00 00 00 FF 05 <codecave:Set_captures> 5B 58 C3",
			"access": "wre"
		},
		"Get_thcrap_spell_id": {
			"code": "89 35 <codecave:base_tsa_spell_real> 83 8B 04 15 00 00 01 C3",
			"access": "wre"
		}		
	}
}