class Element {
    constructor(){
       this.locator = locator 
    }
    getLocator(){
        return this.locator;
    }
}
const element = new Element('my element')
console.log(element.getLocator())