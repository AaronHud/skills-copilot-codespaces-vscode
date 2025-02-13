function skillsMember() {
    return {
        "name": "skills",
        "description": "Skills",
        "parameters": {
            "type": 1,
            "properties": {
                "skill": {
                    "type": 3,
                    "description": "The skill you want to check."
                },
                "level": {
                    "type": 4,
                    "description": "The level of the skill you want to check."
                }
            },
            required: ["skill", "level"]
        }
    };
}