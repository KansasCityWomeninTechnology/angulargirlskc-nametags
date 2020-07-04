# AngularGirlsKC Name Tags
Generate name tags for the event

## Get going
1. After cloning the repo, run `npm install`


## How to generate name tags
1. Add preferred names to a file called _names.txt_. Use 1 name per line. Example file will look like
```text
Grace Hopper
Katherine Johnson
LadyDev
```
2. run `npm run generate` to create the nametags for attendees. A nametag will generate for each preferred name in the "out" folder. The file will be named by preferred names using dash for whitespace (kebab case)

3. run to generate nametags for the following participant types. Calling `generate` without any arguments will generate nametags for attendees.
`npm run generate mentor`
`npm run generate guest`
`npm run generate organizer`
