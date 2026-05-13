# Define the paths we want to include
$includePaths = @("package.json", "next.config.ts", "tsconfig.json", "README.md", "src")
$outputFile = "combined_codebase.txt"

# Clear the output file
"" | Out-File -FilePath $outputFile -Encoding utf8

foreach ($path in $includePaths) {
    if (Test-Path $path) {
        $items = Get-ChildItem -LiteralPath $path -Recurse -File
        foreach ($item in $items) {
            # Skip node_modules and .next just in case they are somehow caught
            if ($item.FullName -like "*\node_modules\*" -or $item.FullName -like "*\.next\*") {
                continue
            }
            
            "==================================================" | Out-File -FilePath $outputFile -Append -Encoding utf8
            "FILE: $($item.FullName)" | Out-File -FilePath $outputFile -Append -Encoding utf8
            "==================================================" | Out-File -FilePath $outputFile -Append -Encoding utf8
            Get-Content -LiteralPath $item.FullName | Out-File -FilePath $outputFile -Append -Encoding utf8
            "`n`n" | Out-File -FilePath $outputFile -Append -Encoding utf8
        }
    }
}
