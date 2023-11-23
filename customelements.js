//year
class DaysToNewYears extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-days-to-newyears", DaysToNewYears);