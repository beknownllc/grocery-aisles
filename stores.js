// Per-store availability, checked Nov 17, 2026 against each store's own website near ZIP 37915.
// no: food ids (first number in foods.js) NOT carried by that store. Hidden by default when the store is selected.
// packs: suggested pack size shown as a tag (Sam's sells in bulk). You can still edit these in the app.
window.STORE_DATA={
"Kroger":{
  note:"Stock checked Nov 17, 2026 at Kroger Broadway Shopping Center and Chapman Square (same result). Foods it doesn't carry are hidden. Tap Show hidden to see them.",
  no:[83,90,98],
  packs:{}
},
"Walmart":{
  note:"Only partly checked (Nov 17, 2026, Kinzel Way Supercenter). A few foods are hidden. Use 'Not sold at Walmart' on any others you find missing.",
  no:[98,112],
  packs:{}
},
"Sam's Club":{
  note:"Only partly checked (Nov 17, 2026, East Knoxville club). A few foods are hidden. Use 'Not sold at Sam's Club' on any others you find missing.",
  no:[2,6,118],
  packs:{3:"24 oz",4:"16 oz",7:"6 ct hearts",8:"3 lb",9:"6 ct",10:"3 lb bag",11:"10 lb bag",12:"2 lb"}
}
};
