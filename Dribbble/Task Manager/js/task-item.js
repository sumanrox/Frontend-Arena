class taskitem extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
                        <div class="row mx-1 task-item-animation border-bottom task-item-hover-actions">
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <img class="icon-size" src="./node_modules/bootstrap-icons/icons/check-circle-fill.svg" alt="">
                            </div>
                            <div class="col-7 d-flex flex-column justify-content-center align-items-start" id="items">
                                
                                <p class="lead mt-2" style="font-size:13px; font-weight: 500;">Create AdWords campaings
                                    </br>
                                    <span class="small-text op-level-5">22 Feb, 2018</span>
                                </p>
                                
                                <div class="row" id="action-panel">
                                    <div class="icon-wrapper mx-2 rounded-circle">
                                        <img class="img-fluid" src="./node_modules/bootstrap-icons/icons/person-plus.svg" alt="">
                                    </div>
                                    <div class="icon-wrapper mx-2 rounded-circle">
                                        <img class="img-fluid" src="./node_modules/bootstrap-icons/icons/archive.svg" alt="">
                                    </div>
                                    <div class="icon-wrapper mx-2 rounded-circle">
                                        <img class="img-fluid" src="./node_modules/bootstrap-icons/icons/pencil-square.svg" alt="">
                                    </div>
                                    <div class="icon-wrapper mx-2 rounded-circle">
                                        <img class="img-fluid" src="./node_modules/bootstrap-icons/icons/trash.svg" alt="">
                                    </div>
                                </div>
                            
                            </div>
                            <div class="col-3 d-flex justify-content-end align-items-center">
                                <img class="img-fluid rounded-circle user-profile-pic user-profile-pic-size" src="https://source.unsplash.com/W7b3eDUb_2I">
                            </div>
                        </div>
        `
    }
}

window.customElements.define('task-item',taskitem);