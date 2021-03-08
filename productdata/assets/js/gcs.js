function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.insertBefore(document.getElementById(data), data.nextSibling);
}

function componentregionfilter(region)
{
var x=document.getElementsByClassName('ComponentDataRow')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';};
$( "tr:icontains(' !" + region + "!')" ).css( "display", "table-row" );
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
document.getElementById(region + 'filter').style.color='#000000';
}

function unhighlight(x) {
x.style.color='#ffffff';
}

function highlight(x) {
x.style.color='red';
}

function langpack()
{
var lang=navigator.language;
 switch(lang) {
 case "en-US":
translate("text001","Catalog");
translate("text002","Program");
translate("text003","Organizational");
translate("Programme","Program");
translate("pProgramme","program");
translate("Staff","Faculty");
translate("Optimisation","Optimization");
translate("oOrganisation","Organization");
translate("oOrganisational","Organizational");
translate("Personalised","Personalized");
translate("pProgrammes","programs");
translate("Catalogue","Catalog");
}
}

function hideSPILtable(tableid)
{
var x=document.getElementsByClassName('SPILH11')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='block';}
document.getElementById('SPILHeader').style.display='block';
document.getElementById(tableid).style.display='none';
document.getElementById(tableid + 'Minus').style.display='none';
document.getElementById(tableid + 'Plus').style.display='table-row';
}

function showSPILtable(tableid)
{
var x=document.getElementsByClassName('SPILH11')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
document.getElementById('DIV' + tableid).style.display='block';
document.getElementById('SPILHeader').style.display='none';
document.getElementById(tableid).style.display='table';
document.getElementById(tableid + 'Plus').style.display='none';
document.getElementById(tableid + 'Minus').style.display='inline';
}

function keyword(){
var x=document.getElementsByTagName('table')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table';}
document.getElementById('ClearPlatformFilters').style.display='table-row';
var y=document.getElementById('keywordform').value;
var x=document.getElementsByClassName('Platform');
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';};
$( "tr:icontains('" + y + "')" ).css( "display", "table-row" );
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
}

function showsowview()
{
document.getElementById('wbsView').style.display='block';
document.getElementById('wbsPhases').style.display='none';
document.getElementById('wbsRoles').style.display='none';
document.getElementById('wbsActivities').style.display='none';
}

function showsummarypage(filename)
{
window.open(filename,"_blank","width=600");
}

function showwbsview()
{
document.getElementById('wbsView').style.display='none';
document.getElementById('wbsPhases').style.display='block';
document.getElementById('wbsRoles').style.display='block';
document.getElementById('wbsActivities').style.display='block';
}


function hidetable(tableid)
{
document.getElementById(tableid).style.display='none';
document.getElementById(tableid + 'Minus').style.display='none';
document.getElementById(tableid + 'Plus').style.display='table-row';
}

function showtable(tableid)
{
document.getElementById(tableid).style.display='table';
document.getElementById(tableid + 'Plus').style.display='none';
document.getElementById(tableid + 'Minus').style.display='table-row';
}

function newfilter()
{
var x=document.getElementsByClassName('Platform')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
var y=document.getElementsByClassName('PlatformFilter')
var j;
for (j=0; j< y.length; j++) {y[j].style.display='table-row';}
document.getElementById('PlatformFilters').style.color='#000000';
document.getElementById('ClearPlatformFilters').style.display='table-row';
}

function regionfilter()
{
expandall();
hidealllines("region");
var y=document.getElementsByClassName('RegionFilter')
var j;
for (j=0; j< y.length; j++) {y[j].style.display='table-row';}
document.getElementById('RegionFilters').style.color='#000000';
document.getElementById('ClearRegionFilters').style.display='table-row';
document.getElementById('ClearPlatformFilters').style.display='table-row';
}

function showplatformx(platform)
{
var x=document.getElementsByClassName(platform)
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
document.getElementById(platform + 'filter').style.color='#000000';
}

function NewSalesMapPlatformFilter()
{
var x=document.getElementsByClassName('Platform')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
document.getElementById('Analyticsfilter').className='SalesMapPlatformFiltersOff';
document.getElementById('Collaboratefilter').className='SalesMapPlatformFiltersOff';
document.getElementById('Learnfilter').className='SalesMapPlatformFiltersOff';
document.getElementById('Moodlefilter').className='SalesMapPlatformFiltersOff';
document.getElementById('Moodleroomsfilter').className='SalesMapPlatformFiltersOff';
document.getElementById('PlatformFilters').className='SalesMapPlatformFiltersButtonOn';
document.getElementById('ClearPlatformFilters').className='SalesMapClearPlatformFiltersButtonOn';
}

function showplatform(platform)
{
var x=document.getElementsByClassName(platform)
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
document.getElementById(platform + 'filter').style.color='#000000';
var x=document.getElementsByClassName("indev");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';};
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
}

function showregion(region)
{
var x=document.getElementsByTagName('table')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table';}
document.getElementById('ClearPlatformFilters').style.display='table-row';

var x=document.getElementsByClassName('Platform');
$( "tr:icontains(' !" + region + "! ')" ).css( "display", "table-row" );
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
document.getElementById(region + 'filter').style.color='#000000';
}


function clearfilters(platform)
{
document.getElementById('keywordform').value='';
var x=document.getElementsByTagName('TR')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
document.getElementById('ClearPlatformFilters').style.display='none';
document.getElementById('PlatformFilters').style.color='#000000';
var y=document.getElementsByClassName('FilterSelectButton')
var j;
for (j=0; j< y.length; j++) {y[j].style.display='none'; y[j].style.color='#777777';}
var x=document.getElementsByClassName("indev");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';};
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
}

function clearsalesmapfilters()
{
var x=document.getElementsByTagName('TR')
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
document.getElementById('Analyticsfilter').className='SalesMapPlatformFiltersHidden';
document.getElementById('Collaboratefilter').className='SalesMapPlatformFiltersHidden';
document.getElementById('Learnfilter').className='SalesMapPlatformFiltersHidden';
document.getElementById('Moodlefilter').className='SalesMapPlatformFiltersHidden';
document.getElementById('Moodleroomsfilter').className='SalesMapPlatformFiltersHidden';
document.getElementById('PlatformFilters').className='SalesMapPlatformFiltersButtonOff';
document.getElementById('ClearPlatformFilters').className='SalesMapClearPlatformFiltersButtonOff';
}

function xkeyword(){
document.getElementById('ClearPlatformFilters').style.display='table-row';
var y=document.getElementById('keywordform').value;
var x=document.getElementsByClassName('Platform');
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';};
$( "tr:icontains('" + y + "')" ).css( "display", "table-row" );
var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
}

function Cameleon(cameleonfile) {
window.open(cameleonfile,'_blank','width=200');
}

function ServicePage(pagefile) {
window.open(pagefile,'_blank','top=50,left=50,width=1000,height=700,');
}


function regionratecard(file) {
window.open(file,'_blank','width=600');
}

function pricingtable(file) {
window.open(file,'_blank','width=1000');
}

function NewBusiness()
{
document.getElementById('NewBusiness').style.display='block';
document.getElementById('ExpansionBusiness').style.display='none';
document.getElementById('NewBusinessButton').className='BusinessTypeOn';
document.getElementById('ExpansionBusinessButton').className='BusinessTypeOff';
}

function ExpansionBusiness()
{
document.getElementById('ExpansionBusiness').style.display='block';
document.getElementById('NewBusiness').style.display='none';
document.getElementById('NewBusinessButton').className='BusinessTypeOff';
document.getElementById('ExpansionBusinessButton').className='BusinessTypeOn';
}

function showSalesMapplatform(platform)
{
var x=document.getElementsByClassName(platform)
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
document.getElementById(platform + 'filter').className='SalesMapPlatformFiltersOn';
}

function sowloader(filename){
window.open(filename,"_blank","width=600");
}

function proposalloader(filename){
window.open(filename, "_blank","width=600");
}

function selectionloader(filename){
window.open(filename, "_blank","width=600");
}

function showroles(role)
{
document.activeElement.style.border = "2px solid #000000";
document.activeElement.style.color = "#000000";
var x=document.getElementsByClassName(role);
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}
}

function clearroles()
{
document.getElementById("Activities").style.display='none';
document.getElementById("ProjectActivities").style.display='none';
document.getElementById("Hidden").style.display='table';
var x=document.getElementsByClassName("Role");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none'};
var y=document.getElementsByClassName("RoleButton");
var i;
for (i=0; i< y.length; i++) {
y[i].style.border='1px solid #aaaaaa';
y[i].style.color='#aaaaaa';
};
}

function showall()
{
document.getElementById("Hidden").style.display='none';
document.getElementById("Activities").style.display='table';
document.getElementById("ProjectActivities").style.display='table';
var x=document.getElementsByClassName("Role");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none'};
var y=document.getElementsByClassName("RoleButton");
var i;
for (i=0; i< y.length; i++) {
y[i].style.color='#000000'
y[i].style.border='none'
};
}

function Roadmap()
{
alert ("Statements regarding our product development initiatives, including new products and future product upgrades, updates or enhancements represent our current intentions, but may be modified, delayed or abandoned without prior notice and there is no assurance that such offering, upgrades, updates or functionality will become available unless and until they have been made generally available to our customers.");
var x=document.getElementsByTagName('table');
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table';}
var x=document.getElementsByClassName("indev");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}

var x=document.getElementsByClassName("inplan");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}

var x=document.getElementsByClassName("design");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table-row';}

var x=document.getElementsByClassName("H1");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='block';}
}

function Reset()
{
location=location
}

function translate(string, translation)
{
var x=document.getElementsByClassName(string, translation);
var i;
for (i=0; i< x.length; i++) {x[i].innerHTML=translation;}
if(document.getElementById(string) != null){document.getElementById(string).innerHTML="Catalog";}
}

function expandall()
{
var x=document.getElementsByClassName("soltable");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='table';}

var y=document.getElementsByClassName("catdivisioncategories");
var j;
for (j=0; j< y.length; j++) {y[j].style.display='block';}

var z=document.getElementsByClassName("Minus");
var k;
for (k=0; k< z.length; k++) {z[k].style.display='inline';}

var w=document.getElementsByClassName("Plus");
var h;
for (h=0; h< w.length; h++) {w[h].style.display='none';}

}

function collapseall()
{
var x=document.getElementsByClassName("soltable");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}

var y=document.getElementsByClassName("catdivisioncategories");
var j;
for (j=0; j< y.length; j++) {y[j].style.display='none';}

var z=document.getElementsByClassName("Minus");
var k;
for (k=0; k< z.length; k++) {z[k].style.display='none';}

var w=document.getElementsByClassName("Plus");
var h;
for (h=0; h< w.length; h++) {w[h].style.display='inline';}
}

function hidealllines(classname)
{
var x=document.getElementsByClassName("solrow");
var i;
for (i=0; i< x.length; i++) {x[i].style.display='none';}
}

function greeting()
{
}

function inclprods(code)
{
var x=document.getElementById("Included"+code).style.display
var y='table';
var z='none';
if(x == y){document.getElementById("Included"+code).style.display='none';document.getElementById("Included"+code).style.margin='0px 0px 0px 0px';};
if(x == z){document.getElementById("Included"+code).style.display='table';document.getElementById("Included"+code).style.margin='0px 0px 10px 5px';};
if(x == ""){document.getElementById("Included"+code).style.display='table';document.getElementById("Included"+code).style.margin='0px 0px 10px 5px';};
var u=document.getElementById("Docs"+code).style.display
var v='table';
var w='none';
if(u == v){document.getElementById("Docs"+code).style.display='none';document.getElementById("Docs"+code).style.margin='0px 0px 0px 0px';};
if(u == w){document.getElementById("Docs"+code).style.display='table';document.getElementById("Docs"+code).style.margin='0px 0px 10px 0px';};
if(u == ""){document.getElementById("Docs"+code).style.display='table';document.getElementById("Docs"+code).style.margin='0px 0px 10px 0px';};
}

function expandtext(code)
{
document.getElementById(code + 'more').style.display='block';
document.getElementById(code + 'less').style.display='none';
}

function shrinktext(code)
{
document.getElementById(code + 'more').style.display='none';
document.getElementById(code + 'less').style.display='block';
}

function openMarket(evt, cityName) {

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showdivision(divisionid)
{
document.getElementById(divisionid).style.display='block';
document.getElementById(divisionid + 'Plus').style.display='none';
document.getElementById(divisionid + 'Minus').style.display='inline';
}

function hidedivision(divisionid)
{
document.getElementById(divisionid).style.display='none';
document.getElementById(divisionid + 'Plus').style.display='inline';
document.getElementById(divisionid + 'Minus').style.display='none';
}

function selectview(view)
{
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
