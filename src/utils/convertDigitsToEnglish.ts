
 function convertDigitsToEnglish(str: string) {  
        return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());    
 
}
export default convertDigitsToEnglish