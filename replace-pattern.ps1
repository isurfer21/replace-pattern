$ScriptPath = $MyInvocation.MyCommand.Path
while ($ScriptPath -and (Get-Item $ScriptPath).LinkType -eq 'SymbolicLink') {
    $ScriptPath = (Get-Item $ScriptPath).Target
}
$ScriptPath = Split-Path $ScriptPath
# Write-Output $ScriptPath
deno run --allow-read --allow-write (Join-Path $ScriptPath "replace-pattern.js") $args