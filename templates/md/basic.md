<%*
const title = await tp.system.prompt("Enter title");
if (!title) return;

const outDir = await tp.system.prompt("Enter directory name or blank");

const uuid = tp.user.uuid_v7();
const filename = `${uuid}.md`;
const filePath = outDir ? `${outDir}/${filename}` : filename;

if (await tp.file.exists(uuid)) {
  new Notice(`Error: ${filePath} is already exist.`)
  return
}

const now = tp.date.now("YYYY-MM-DD", 9);

const yamlBody = `---
title: ${title}
aliases:
  - ${title}
tag:
date: ${now}
draft: false
---`

await app.vault.create(filePath, yamlBody);

await app.workspace.openLinkText("", filePath, true);

%>