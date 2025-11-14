Notion “Plan” as Select

If your Notion database uses a Select property for the plan (e.g., Pilot Pack / Growth System / Performance Partner), set the following env variables so the API writes to it correctly:

- NOTION_PROP_PLAN=Plan
- NOTION_PROP_PLAN_TYPE=select

Notes
- If the option doesn’t exist yet, Notion will create it on first write.
- If you prefer rich text, omit NOTION_PROP_PLAN_TYPE or set it to rich_text.
- The validator and CLI scripts will expect the correct type based on NOTION_PROP_PLAN_TYPE.

