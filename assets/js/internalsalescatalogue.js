// Global Variables
var jsfileversion="0022";

function ServicePage(pagefile) {
    window.open("productdata/template.html",'_blank','top=50,left=50,width=1200,height=700,');
}

function selectview(view){
    
    viewtabbuttons = document.getElementsByClassName("CatalogueViewButton");

        for (i = 0; i < viewtabbuttons.length; i++) {
            viewtabbuttons[i].style.backgroundColor = viewtabbuttons[i].style.backgroundColor='rgb(76,76,76)';
            viewtabbuttons[i].style.color = viewtabbuttons[i].style.color='rgb(150,150,150)';
        }
    
    hidetabtexts = document.getElementsByClassName("CatalogueViewText");

        for (i = 0; i < hidetabtexts.length; i++) {
            hidetabtexts[i].style.display = hidetabtexts[i].style.display='none';
        }

    document.getElementById('CatalogueViewButton' + view).style.backgroundColor='rgb(70,158,241)';
    document.getElementById('CatalogueViewButton' + view).style.color='rgb(210,210,210)';
    document.getElementById('CatalogueViewText' + view).style.display='block'; 

    hideviewtables = document.getElementsByClassName("CatalogueViewDivisionsTable");

        for (i = 0; i < hideviewtables.length; i++) {
            hideviewtables[i].style.display = hideviewtables[i].style.display='none';
        }
    
    document.getElementById('CatalogueViewDivisionsTable' + view).style.display='block';
    document.getElementById('FilterBar').style.display='none';
    if (view == 2) {document.getElementById('FilterBar').style.display='block';};
}

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }

/* var w = document.getElementById('imgbground'); */
/* w.style.display = 'none'; */

/* var w = document.getElementById('imgbground-blur');*/
/* w.style.display = 'none';*/

var x = document.getElementById(sect);
x.style.display = 'block';

/* var elements2 = document.getElementsByClassName(sect + '-display');*/

    for (var i = 0; i < elements2.length; i++){
        elements2[i].style.display = 'block';
    }



/* document.getElementById('JSSerNo').textContent='.'+jsfileversion;*/

/* document.getElementById('navbarNavDropdown').className='navbar-collapse show';*/
/* window.history.pushState("","Warksar Home","#"+sect+"-Top");*/
}

