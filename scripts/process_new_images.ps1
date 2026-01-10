
$source = "C:\Users\kipar\.gemini\antigravity\brain\200e11f6-3bbc-402b-9d4c-cea3f9f5bbea"
$dest = "public\images"
$files = Get-ChildItem -Path $source -Filter "phrase_*.png"

foreach ($file in $files) {
    if ($file.Name -match "phrase_(\d+)_") {
        $id = $matches[1]
        $targetName = "phrase-$id.webp"
        $targetPath = Join-Path $dest $targetName
        
        Write-Host "Processing $id to $targetPath"
        
        $cmd = "ffmpeg -y -i `"$($file.FullName)`" `"$targetPath`""
        Invoke-Expression $cmd
    }
}
