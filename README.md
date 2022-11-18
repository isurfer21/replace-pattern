# replace-pattern
A tool to replace given pattern with substitute text or filter inside file. 

Due to this feature it can be used for replacing the matched selction either with substitute text or filtered text. The filtered texts are made by applying filter criterias over matched selections.

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
