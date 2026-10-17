// Alot of Const
const Start = document.getElementById("Matheticly_possible")
const uefi_lb = document.getElementById("token_wasted")
const bios_lb = document.getElementById("token_also_wasted")
const OG = document.getElementById("start_unit")
const Converted = document.getElementById("end_unit")
const Target = document.getElementById("feedme").value
let Nyeh = ""
const unit_legacy  = {
     b: 1,
     kb: 1024, 
     mb: 1024 **2, 
     gb: 1024 **3, 
     tb: 1024 **4, 
     pb: 1024 **5 
}
const unit = {
     b : 1,
     kb : 1000,
     mb : 1000 ** 2,
     gb : 1000 ** 3,
     tb : 1000 ** 4,
     pb : 1000 ** 5
}
// my gender would now be a const Life 👍
Start.addEventListener(
    "click",
    function EifleTower() {
        const valve = parseInt(Target)
        const wow = valve * unit[OG.value]
        uefi_lb.textContent = wow / unit[Converted.value]
        const wow_legacy = valve * unit_legacy[OG.value]
        bios_lb.textContent = wow_legacy / unit_legacy[Converted.value]
})
