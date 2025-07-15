# PowerShell script to prepare Next.js standalone output for Azure deployment

$deployPath = "azure-standalone"
$standalonePath = ".next\standalone"

Write-Host "Running Next.js build..."
npm run build

Write-Host "Creating deployment directory: $deployPath"
Remove-Item -Recurse -Force $deployPath -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path "$deployPath\.next" | Out-Null

Write-Host "Copying standalone files (excluding .next)..."
Get-ChildItem $standalonePath -Recurse | Where-Object {
    $_.FullName -notlike "*$($standalonePath)\.next*"
} | ForEach-Object {
    $dest = $_.FullName.Replace($standalonePath, $deployPath)
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
    } else {
        Copy-Item $_.FullName -Destination $dest -Force
    }
}

Write-Host "Copying static files..."
Copy-Item -Recurse ".next\static" "$deployPath\.next\" -Force

if (Test-Path "public") {
    Write-Host "Copying public folder..."
    Copy-Item -Recurse "public" "$deployPath\" -Force
}

Write-Host "Done! '$deployPath' is ready for Azure App Service deployment."
