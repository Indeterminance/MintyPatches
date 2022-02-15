{
	"COMMENT": "Pray",
	"codecaves": {
		"Modern_MASTER": {
			"code": "4D 41 53 54 45 52 00",
			"access": "wre"
		},
		"process_set_history": {
			"code": "50 53 51 52 6A 00 B0 <option:Sets_enabled> 3C 01 0F 85 B9000000 A1 <codecave:base_tsa_spell_real> 3B 05 <codecave:Tracked_spell> 0F 85 A8000000 // A1 10 57 4A 00 6B C0 03 03 05 14 57 4A 00 3B 05 <codecave:Set_shottype> 0F 85 8E 00 00 00 // A1 <codecave:Set_attempts> BA 00 00 00 00 B9 0A 00 00 00 F7 F1 83 C2 30 52 85 C0 0F 85 E8 FF FF FF A1 <codecave:Set_attempts> 83 F8 0A 0F 8D 02 00 00 00 6A 30 6A 2F A1 <codecave:Set_captures> BA 00 00 00 00 B9 0A 00 00 00 F7 F1 83 C2 30 52 85 C0 0F 85 E8 FF FF FF A1 <codecave:Set_captures> 83 F8 0A 0F 8D 02 00 00 00 6A 30 6A 0A 8D 1D <codecave:Set_string> 58 88 03 43 80 7B FF 00 0F 85 F2 FF FF FF 5A 59 52 8D 1D <codecave:Set_string> 8A 03 88 04 0F 41 43 84 C0 0F 85 F1 FF FF FF 5A 5B 58 C3 6A 57 6A 2F 6A 5C 6A 20 E9 C1 FF FF FF",
			"access": "wre"
		},
		"compare_histories": {
			"code": "50 53 51 8D 05 <codecave:Manual_string> 8A 18 3A 19 0F 85 19 00 00 00 84 DB 0F 84 07 00 00 00 40 41 E9 E7 FF FF FF 59 5B 58 E8 [codecave:process_history] 90 C3 59 5B 58 8A 11 88 14 39 41 84 D2 0F 85 F2 FF FF FF C3",
			"access": "wre"
		},
		"process_history": {
			"code": "53 B3 <option:MASTER_enabled> 80 FB 01 0F 85 2A 00 00 00 83 3D <codecave:Captures> 64 0F 8C 1D 00 00 00 50 8D 05 <codecave:MASTER> 8A 10 88 14 39 41 40 84 D2 0F 85 F1 FF FF FF 49 58 E9 7E 00 00 00 B3 <option:TD_style_enabled> 80 FB 01 0F 85 65 00 00 00 83 3D <codecave:Attempts> 64 0F 8C 58 00 00 00 50 83 3D <codecave:Captures> 64 0F 8C 1C 00 00 00 8D 05 <codecave:TD_style_max> 8A 10 88 14 39 41 40 84 D2 0F 85 F1 FF FF FF 49 58 E9 3C 00 00 00 8D 05 <codecave:Manual_string> 8A 10 88 14 39 41 40 80 FA 2F 0F 85 F0 FF FF FF 58 C6 44 39 00 39 C6 44 39 01 39 C6 44 39 02 2B 83 C1 03 E9 0E 00 00 00 8A 11 88 14 39 41 84 D2 0F 85 F2 FF FF FF 49 E8 [codecave:process_set_history] C6 04 39 00 41 5B C3",
			"access": "wre"
		},
		"Captures": {
			"access": "wr",
			"size": 4,
			"fill" :"00"
		},
		"Attempts": {
			"access": "wr",
			"size": 4,
			"fill" :"00"
		},
		"Manual_string": {
			"access": "wr",
			"size": 32,
			"fill" :"00"
		},
		"MASTER": {
			"code": "56 57 58 59 5A 5B 00",
			"access": "wre"
		},
		"TD_style_max": {
			"code": "39 39 2B 2F 39 39 2B 00"
		},
		"Set_captures": {
			"access": "wr",
			"size": 4,
			"fill" :"00"
		},
		"Set_attempts": {
			"access": "wr",
			"size": 4,
			"fill" :"00"
		},
		"Set_string": {
			"access": "wr",
			"size": 32,
			"fill" :"00"
		},
		"Tracked_spell": {
			"code": "FF FF FF FF",
			"access": "wr"
		},
		"Set_shottype": {
			"code": "FF FF FF FF",
			"access": "wr"
		},
		"base_tsa_spell_real": {
			"code": "FF FF FF FF",
			"access": "wr"
		},
		"dinput8_handle": {
			"access": "wr",
			"size":4
		},
		"WriteModuleHandles_patch_init": {
			"access": "e",
			"export": true,
			"code": "68 <option:dinput8> E8 [th_GetModuleHandleA] A3 <codecave:dinput8_handle> C3"
		}
	},
	"options": {
		"MASTER_enabled":{
			"type": "i8",
			"val": 0x01
		},
		"TD_style_enabled": {
			"type": "i8",
			"val": 0x00
		},
		"Sets_enabled": {
			"type": "i8",
			"val": 0x01
		},
		"dinput8": {
			"type": "s",
			"val": "dinput8.dll"
		}
	}
}