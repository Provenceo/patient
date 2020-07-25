@echo off

set a=0

setlocal EnableDelayedExpansion

for %%n in (*.png) do (

set dt=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2% 
set /A a+=1
ren "%%n" "hz!dt!_!a!.png"
)