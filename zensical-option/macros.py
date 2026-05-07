from pathlib import Path

EXCLUDE = {"index.md", "markdown.md"}


def define_env(env):
    docs_dir = Path(__file__).parent / "docs"
    env.variables["til_count"] = sum(
        1 for f in docs_dir.rglob("*.md") if f.name not in EXCLUDE
    )
