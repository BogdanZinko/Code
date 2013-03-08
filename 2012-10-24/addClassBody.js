<strong>Scenario:</strong> Adding a class on the body tag, when the section menu has a unique class.

var properties = ["class1", "class2", "class3", "class4"]; 
        for(i=0;i<properties.length;i++){
	activeOrNot(properties[i]);
}

function activeOrNot(propertyName){
	if($('#'+propertyName+' span#'+propertyName+'-mid').attr("class").match(/active/) != null){
		$(body).addClass(propertyName);
	}
	else{
		void(0);
	}
}