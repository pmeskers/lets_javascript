# This is a fix for TypeScript and Zone.js, where typings tries to load
# the zone.js.d.ts file from the node module and fails. 
#
# The workaround involves installing the dt~zone.js via typings manually and then removing
# the "broken" file from the node modules directory. 
#
# Honestly, not too sure about the underlying problem here, but this solution 
# is the only thing I could get to work. Hopefully, this file can be deleted and potentially
# the dt~zone.js can be removed from our typings.json.

echo "-------------------------------------"
echo "NOTE! Running custom postinstall task for fixing the broken Zone.js typings dt file"
echo "Please consult https://github.com/angular/zone.js/issues/297 and hopefully delete this script!"
echo "Running: 'rm ./node_modules/zone.js/dist/zone.js.d.ts'"
rm ./node_modules/zone.js/dist/zone.js.d.ts
echo "All done."
echo "-------------------------------------"
