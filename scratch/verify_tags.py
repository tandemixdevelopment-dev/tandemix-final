import re

with open("c:/Work/Dualis Digital Company/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Let's find the testimonials section and count tags
lines = html.splitlines()

# We can search for testimonials-container
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "testimonials-container" in line:
        start_idx = i
    if start_idx != -1 and "</section>" in line and i > start_idx:
        end_idx = i
        break

print(f"Testimonials section lines: {start_idx} to {end_idx}")

# Let's inspect the tags in this range
tag_stack = []
for i in range(start_idx, end_idx + 1):
    line = lines[i]
    # Simple regex to find HTML tags in the line
    tokens = re.split(r'(<[^>]+>)', line)
    for token in tokens:
        if token.startswith("<") and token.endswith(">"):
            # It's a tag
            if token.startswith("<!--") or token.endswith("-->"):
                continue  # skip comments
            if token.startswith("</"):
                # Closing tag
                tag_name = token[2:-1].split()[0]
                if tag_stack:
                    last_tag = tag_stack.pop()
                    if last_tag != tag_name:
                        print(f"Mismatch at line {i+1}: expected </{last_tag}>, got {token}")
                        tag_stack.append(last_tag)  # put it back or handle
                else:
                    print(f"Extra closing tag at line {i+1}: {token}")
            elif token.endswith("/>"):
                # Self-closing tag
                continue
            else:
                # Opening tag
                tag_name = token[1:-1].split()[0]
                # Check for self-closing tag without /> (like img, input, br, hr)
                if tag_name.lower() in ["img", "input", "br", "hr", "meta", "link"]:
                    continue
                tag_stack.append(tag_name)

print("Remaining tag stack:")
for t in tag_stack:
    print(t)
