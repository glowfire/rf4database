// Rewrite these.

function createMaterialListing(){

	currentMaterialsBuyPrice = 0
    currentMaterialsBuyPriceDiscount = 0

	if (currentItem.materials!==undefined){
		var materialsList = document.createElement('p');
		var materialsListString = "Materials: "
		var node = document.createTextNode(materialsListString);
		materialsList.appendChild(node);
    	for (j=0;j<currentItem.materials.length;j++){
    		var currentMaterial = currentItem.materials[j].convertStringToItem()
    		materialsList.innerHTML+="<br>"+(j+1)+". "+currentMaterial.name
			if (currentMaterial.buy!==undefined){
        		currentMaterialBuy=currentMaterial.buy;
				currentMaterialsBuyPrice+=currentMaterialBuy;
    			currentMaterialsBuyPriceDiscount+=Math.ceil(currentMaterialBuy*.9);
    			materialsList.innerHTML+=" (buy: "+currentMaterial.buy+" G, discounted: "
        		materialsList.innerHTML+=Math.ceil(currentMaterial.buy*.9)+" G)"
        	} else {
    			materialsList.innerHTML+=" (cannot be bought)"
        	}
    	}
    
    	if (currentMaterialsBuyPrice>0){
			materialsList.innerHTML+="<br><br>Total cost of buyable materials: "+currentMaterialsBuyPrice+" G "
			materialsList.innerHTML+="(all discounted: "+currentMaterialsBuyPriceDiscount+" G)"
        
        	if (currentItem.buy==undefined){
        		materialsList.innerHTML+="<br>This item cannot be bought and must be produced."
        	} else if (allMaterialsBuyable(currentItem.materials)){
            	if (currentMaterialsBuyPrice>currentItem.buy){
        			materialsList.innerHTML+="<br>Assuming no discounts, it is cheaper to "
            		materialsList.innerHTML+="<span style='font-weight:bold'>buy the product directly</span>";
            		materialsList.innerHTML+=" than buying and processing the materials."
        		} else {
        			materialsList.innerHTML+="<br>Assuming no discounts, it is cheaper to "
            		materialsList.innerHTML+="<span style='font-weight:bold'>buy and process the materials</span>";
            		materialsList.innerHTML+=" than buying the product directly."
				}
        	}
        
    	} else {
    		materialsList.innerHTML+="<br><br>None of the materials can be bought."
    	}
    }
    document.getElementById('currentItemDiv').appendChild(materialsList)
}

// Section for level independent stats like upgrade info
var independentStats

var dependentStats

function getUpgradeInfo(){
	independentStats = document.createElement('p');
	independentStats.innerHTML=""
	if (currentItem.upgradeinfo!==undefined){ //Effects of item when used for upgrades
		var currentUpgradeInfo=currentItem.upgradeinfo
		var upgradeInfoSection=document.createElement('p');
		var upgradeInfoString="UPGRADE INFO";
		var node = document.createTextNode(upgradeInfoString);
		upgradeInfoSection.appendChild(node);
    
	    if (currentUpgradeInfo.hp!==undefined){
			upgradeInfoSection.innerHTML+="<br>HP: "+currentEffects.hp
        }
    
	    // Upgrade effects are level independent
	    independentStats.appendChild(upgradeInfoSection)
	    }

	if (independentStats.hasChildNodes()){
		document.getElementById('currentItemDiv').appendChild(independentStats);
    }
}

function getEffectsTable(){
	// Section for level dependent stats like effects
	dependentStats = document.getElementById('dependantDiv');
    if (dependentStats.hasChildNodes()){
		dependentStats.innerHTML=""
	}
	if (currentItem.effects!==undefined){ //Effects of item when ingested
		var currentEffects=currentItem.effects
		var effectsSectionHeader=document.createElement('p');
		effectsSectionHeader.innerHTML="<span style='font-weight:bold'>EFFECTS</span>";
    
	    if (currentEffects.heal!==undefined){
	    	effectsSectionHeader.innerHTML+="<br>Heal: "
	        for (i=0;i<currentEffects.heal.length;i++){
	        	var currentHeal=currentEffects.heal[i];
	        	effectsSectionHeader.innerHTML+=" "+currentHeal
	        }
	    }
    
	    if (currentEffects.statusailments!==undefined){
    		effectsSectionHeader.innerHTML+="<br>Status Ailments:"
        	for (i=0;i<currentEffects.statusailments.length;i++){
        		var currentAilment=currentEffects.statusailments[i];
        		effectsSectionHeader.innerHTML+=" "+currentAilment
        	}
    	}
    
    	var effectsValueArray=[];
    	var effectsTypeArray=[];
    
    	var effectsTypeMax100=["HP (%)","RP (%)"];
    	var effectsTypeMax200=["Fire Res (%)","Water Res (%)",
    		"Earth Res (%)","Wind Res (%)",
        	"Light Res (%)","Dark Res (%)","Love Res (%)"];
    	var effectsTypeMinNeg100=["HP (%)","RP (%)",
    		"HP max (%)","RP max (%)",
    		"STR (%)","VIT (%)","INT (%)"];
    
		var effectsTable = document.createElement('table'), tr, td, row, cell;

    	dependentStats.appendChild(effectsSectionHeader) // Effects are level dependent
    	dependentStats.appendChild(effectsTable)

		effectsTableHeader=document.createElement('tr');
		effectsTable.appendChild(effectsTableHeader);

		c1 = document.createElement('td');
		effectsTableHeader.appendChild(c1);
		c1.innerHTML="Lv.";
    
    	function appendEffectsHeader(value,string){
    		if (value!==undefined){
    			c=document.createElement('td');
				effectsTableHeader.appendChild(c);
				c.innerHTML=string;
        		effectsValueArray.push(value);
        		effectsTypeArray.push(string);
        	}
    	}

		appendEffectsHeader(currentEffects.hp,"HP");
		appendEffectsHeader(currentEffects.hpP,"HP (%)");
		appendEffectsHeader(currentEffects.rp,"RP");
		appendEffectsHeader(currentEffects.rpP,"RP (%)");
    
		appendEffectsHeader(currentEffects.hpmax,"HP max");
		appendEffectsHeader(currentEffects.hpmaxP,"HP max (%)");
		appendEffectsHeader(currentEffects.rpmax,"RP max");
		appendEffectsHeader(currentEffects.rpmaxP,"RP max (%)");
    
		appendEffectsHeader(currentEffects.str,"STR");
		appendEffectsHeader(currentEffects.strP,"STR (%)");
		appendEffectsHeader(currentEffects.vit,"VIT");
    	appendEffectsHeader(currentEffects.vitP,"VIT (%)");
		appendEffectsHeader(currentEffects.int,"INT");
		appendEffectsHeader(currentEffects.intP,"INT (%)");
    
    	appendEffectsHeader(currentEffects.fireresP,"Fire Res (%)");
    	appendEffectsHeader(currentEffects.waterresP,"Water Res (%)");
    	appendEffectsHeader(currentEffects.earthresP,"Earth Res (%)");
    	appendEffectsHeader(currentEffects.windresP,"Wind Res (%)");
    	appendEffectsHeader(currentEffects.lightresP,"Light Res (%)");
    	appendEffectsHeader(currentEffects.darkresP,"Dark Res (%)");
    	appendEffectsHeader(currentEffects.loveresP,"Love Res (%)");
    
    	appendEffectsHeader(currentEffects.critP,"Crit (%)");
    
    	appendEffectsHeader(currentEffects.critresP,"Crit Res (%)");
    	appendEffectsHeader(currentEffects.knockresP,"Knock Res (%)");
    
    	appendEffectsHeader(currentEffects.psnresP,"Psn Res (%)");
    	appendEffectsHeader(currentEffects.sealresP,"Seal Res (%)");
    	appendEffectsHeader(currentEffects.parresP,"Par Res (%)");
    	appendEffectsHeader(currentEffects.slpresP,"Slp Res (%)");
    	appendEffectsHeader(currentEffects.ftgresP,"Ftg Res (%)");
    	appendEffectsHeader(currentEffects.sickresP,"Sick Res (%)");
    	appendEffectsHeader(currentEffects.faintresP,"Faint Res (%)");
    
    	appendEffectsHeader(currentEffects.psnatkP,"Psn Atk (%)")
    
    	function appendRow(rowid,value){
    		td1 = document.createElement('td');
    		rowid.appendChild(td1);
    		td1.innerHTML = value;
    	}
    
    	for (row = 0; row < maxLv; row++) {
    		tr = document.createElement('tr');
    	    effectsTable.appendChild(tr)
    	
    		td1 = document.createElement('td');
    		tr.appendChild(td1);
    		td1.innerHTML = row+1;
    	    
    	    var integerCorrector=1e6;
    	    var effectsMultiplier = statMultiplier[row]*integerCorrector
        
    	    for (j=0;j<effectsValueArray.length;j++){
    	    	var currentEffectsValueModified = effectsMultiplier*effectsValueArray[j]
    	        var currentEffectsValue= currentEffectsValueModified/integerCorrector;
    	    	var currentEffectsType = effectsTypeArray[j];
    	    	if (currentEffectsType.includes("%")){
    	        	var appendValue = Math.ceil(currentEffectsValue);
    	            if (stringIsInArray(effectsTypeMax200,currentEffectsType)){
    	            	appendValue = Math.min(200,appendValue)
    	            }
    	            if (stringIsInArray(effectsTypeMax100,currentEffectsType)){
    	            	appendValue = Math.min(100,appendValue)
    	            }
    	            if (stringIsInArray(effectsTypeMinNeg100,currentEffectsType)){
    	            	appendValue = Math.max(-100,appendValue)
    	            }
                } else {
                var appendValue = Math.floor(currentEffectsValue);
                }
            	appendRow(tr,appendValue)
        	}
        
        }

	
    }
}

function getProfitTable(){
	
    var profitTable = document.createElement('table'), tr, td, row, cell;
	var profitTableHeader=document.createElement('tr');
	profitTable.appendChild(profitTableHeader);

	function appendToProfitHeader(string){
		var c = document.createElement('td');
		profitTableHeader.appendChild(c);
		c.innerHTML=string;
	}

	appendToProfitHeader("Lv.");
	appendToProfitHeader("Multiplier<br>(Type: "+currentItem.pricemultiplier+")");
	var c3header="Sell Price<br>of "
	if (currentItem.materials!==undefined){
		c3header+="Product";
	    } else {
	    c3header+="Item";
	    }
	appendToProfitHeader(c3header)
	appendToProfitHeader("Increment from<br>previous level")

	var profitArray=[];
	var previousPrice;
	
	var levelColumn=[];
	var multiplierColumn=[];
	var sellPriceColumn=[];
	var incrementColumn=[];
	var profitColumn=[];
	var discountedProfitColumn=[];
	var opportunityCostColumn=[];
	var opportunityProfitColumn=[];
	var returnOnInvestmentColumn=[];
	
	var currentMultiplierArray=getPriceMultiplierArray(currentItem.pricemultiplier)

	for (i=0;i<maxLv;i++){
		levelColumn.push(i+1);
	    var currentMultiplier=currentMultiplierArray[i]
		multiplierColumn.push(currentMultiplier.toPrecision(3));
	    sellPriceColumn.push(getSellPriceAtLevel(currentItem,i+1))
	    if (i==0){
	    	incrementColumn.push("N/A")
	    } else {
	    	incrementColumn.push(getSellPriceAtLevel(currentItem,i+1)-previousPrice)
	    }
	    previousPrice=getSellPriceAtLevel(currentItem,i+1)
	}

	if (canProduceAtVaryingLevels(currentItem)||canBuyAtVaryingLevels(currentItem)){

		document.getElementById('profitTable').innerHTML="<b>Profitability by Level</b>"

		if (currentItem.materials!==undefined){
    		if (allMaterialsBuyable(currentItem.materials)){
    			appendToProfitHeader("Profit<br>(w/o D)");
				appendToProfitHeader("Profit<br>(w/ D)");
            }
    
			if (allMaterialsBuyable(currentItem.materials)){
        		column6 = document.createElement('td');
            	profitTableHeader.appendChild(column6);
            	column6.innerHTML="Opportunity<br>Cost";
            	column6.align="center";
            
        		column7 = document.createElement('td');
				profitTableHeader.appendChild(column7);
				column7.innerHTML="Opportunity<br>Profit";
    			column7.align="center";
			}
    	} else if (currentItem.buy!==undefined){
    		appendToProfitHeader("Profit<br>(w/o D)");
			appendToProfitHeader("Profit<br>(w/ D)");
    	}

		for (row = 0; row < maxLv; row++) {
    
		var sellPrice=getSellPriceAtLevel(currentItem,row+1);
		var sellPriceOfMaterials=sellPrice;

			if (currentItem.materials!==undefined){
        		var buyPrice=currentMaterialsBuyPrice;
        		var buyPriceDiscount=currentMaterialsBuyPriceDiscount
            	var sellPriceOfMaterials=0;
            
            	for (j=0;j<currentItem.materials.length;j++){
            		var currentMaterial=currentItem.materials[j].convertStringToItem();
                	sellPriceOfMaterials+=getSellPriceAtLevel(currentMaterial,row+1)
            	}
                
    			if (allMaterialsBuyable(currentItem.materials)){
        			profitColumn.push(sellPrice-buyPrice);
    				profitWDiscount = sellPrice-buyPriceDiscount;
    				discountedProfitColumn.push(profitWDiscount);
                	opportunityCostColumn.push(sellPriceOfMaterials);
                	opportunityProfitColumn.push(sellPriceOfMaterials-buyPrice);
				}
                
			} else {
        		var buyPrice=currentItem.buy
        		var buyPriceDiscount=Math.ceil(.9*currentItem.buy)
        	
            	if(currentItem.buy!==undefined){
            
            		profitColumn.push(sellPrice-buyPrice);
                	profitWDiscount = sellPrice-buyPriceDiscount;
                	discountedProfitColumn.push(profitWDiscount)
				}
			}
		}
    
		var footer=document.createElement('p')
		footer.innerHTML="Red denotes <span style='color:#FF0000'>not profitable</span> at the specified level.<br>"
		footer.innerHTML+="Blue denotes profit only if the "
    	footer.innerHTML+="<span style='color:#87CEFA'>materials are discounted</span>.<br>"
		footer.innerHTML+="Green denotes <span style='color:#00FF00'>profit</span> at the specified level.<br>"
    	footer.innerHTML+="Violet denotes higher profit from "
    	footer.innerHTML+="<span style='color:#FF00FF'>selling the materials directly</span> than the product.<br>"
    	footer.innerHTML+="Underlined denotes higher profit from "
    	footer.innerHTML+="<span style='text-decoration:underline'>buying and selling the materials</span>"
    	footer.innerHTML+=" directly than buying and converting the materials to this product."
    
    	footer.innerHTML+="<br><br>Opportunity cost: total sell price of materials."
    	footer.innerHTML+="<br>Opportunity profit: total sell price of materials minus total buy price of materials."
    	
    	footer.style.color="yellow"
    
    	} else {
		//document.getElementById('profitTable').innerHTML="<b>Profit table is not applicable.</b>"
    	document.getElementById('profitTable').innerHTML="<b>Price by Level</b>"
    	}
        
	profitArray.arrayPush(levelColumn);
	profitArray.arrayPush(multiplierColumn);
	profitArray.arrayPush(sellPriceColumn);
	profitArray.arrayPush(incrementColumn);
	profitArray.arrayPush(profitColumn);
	profitArray.arrayPush(discountedProfitColumn);
	profitArray.arrayPush(opportunityCostColumn);
	profitArray.arrayPush(opportunityProfitColumn);
	profitArray.arrayPush(returnOnInvestmentColumn);

	for (row=0;row<maxLv;row++){
	    tr = document.createElement('tr');
	    
	    for (col=0;col<profitArray.length/maxLv;col++){
	    	td = document.createElement('td');
	    	tr.appendChild(td);
	        var currentValue = profitArray[row+maxLv*col];
	    	td.innerHTML = currentValue;
	        if ([3,6,7].indexOf(col) > -1){
    	    	td.align="center";
    	    }
        
    	    if (col==4){
        		if (0>currentValue){
        			td.style.color="red"
            	} else if (currentValue>0){
            		td.innerHTML="<span style='color:#00FF00'>"+td.innerHTML+"</span>";
            	    td.style.fontWeight="bold";
            	    td.style.fontSize=18;
            	}
        	}
        
        	if (col==5){
        		if (0>currentValue){
        			td.style.color="red";
        	    } else if (currentValue>0){
        	    	td.style.color="lightskyblue";
        	        td.style.fontWeight="bold";
        	        if (profitArray[row+maxLv*(col-1)]>0){
        	        	td.innerHTML="<span style='color:#00FF00'>"+td.innerHTML+"</span>";
        	        	td.style.fontSize=18;
        	        }
        	    }
        	}
        
        	if (col==6){
        		if (currentValue>profitArray[row+maxLv*(col-4)]){
        	    	td.style.color="violet";
        			td.style.fontWeight="bold";
					td.style.fontSize=18;
        	    }
        	}
        
        	if (col==7){
        		if (currentValue>profitArray[row+maxLv*(col-2)]){
        	    	td.style.textDecoration="underline";
					td.style.fontSize=18;
        	    }
        	}
		}
    
    	profitTable.appendChild(tr);
	}
    
	document.getElementById('profitTable').appendChild(profitTable);
	if (footer!==undefined){
		document.getElementById('profitTable').appendChild(footer);
	}
}
