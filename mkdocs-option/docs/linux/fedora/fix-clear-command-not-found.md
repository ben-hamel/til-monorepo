# Fix Clear Command Not Found

Fedora 42 running in WSL is missing the `clear` command by default. Install the `ncurses` package to restore it:

```bash
sudo dnf install ncurses
```
