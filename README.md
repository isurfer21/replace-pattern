# replace-pattern
A tool to replace given pattern with substitute text or filter inside file. 

Due to this feature it can be used for replacing the matched selction either with substitute text or filtered text. The filtered texts are made by applying filter criterias over matched selections.

## Prerequisite
It would require [Deno](https://deno.land/manual/getting_started/installation) to be installed on system prior its use.

## Setup
Download the repository and make the symbolic link of given bash file in your system's /bin folder to access the app across system.

## Usage
You can see the available options via below command

```
> replace-pattern
Replace Pattern (v1.0.0)

A tool to replace given pattern with substitute inside file.

Syntax:
  replace-pattern <pattern> <substitute> <file>
  replace-pattern <pattern> --filter=<criteria> <file>

Options:
  --filter    Criteria to modify the matched chunk 

Usages:
  replace-pattern 'foo' 'bar' file.txt
  replace-pattern '\\/\\{[a-zA-Z0-9_-]+\\}' '--filter={"{":"&#123;","}":"&#125;"}' file.txt
```

It would also get displayed in case of missing parameters.

## Compatibility
Currently it is tested only at _macOS_.

## Contribute
Although this app will work on _Windows_ as well by using below command otherwise you may need to create batch file for _Windows_ to make it easy to use over there.

```
deno run --allow-read --allow-write replace-pattern.js <pattern> <substitute> <file>
```
