class taskitem extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
                        <div class="row mx-1 mt-4 border-bottom">
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <img class="icon-size" src="./node_modules/bootstrap-icons/icons/check-circle-fill.svg" alt="">
                            </div>
                            <div class="col-7 d-flex flex-column justify-content-center align-items-start">
                                <p class="lead mt-3" style="font-size:13px; font-weight: 500;">Create AdWords campaings
                                </br>
                                    <span class="small-text op-level-5">22 Feb, 2018</span>
                                </p>
                            </div>
                            <div class="col-3 d-flex justify-content-end align-items-center">
                                <img class="img-fluid rounded-circle user-profile-pic user-profile-pic-size" src="https://source.unsplash.com/W7b3eDUb_2I">
                            </div>
                        </div>
        `
    }
}

window.customElements.define('task-item',taskitem);