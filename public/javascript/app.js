
$(document).ready(function() {
	narrative(null,gtissue, ggene, gmutation);	
	

});

function narrative(e, tumor, gene, mutation) {
	
	
    var ret=getnarrative("tissue");
	
	
}

function getnarrative(tissue1) {
	
    $.ajax({
		async:false,
        type: 'POST',
        url: 'getnarrative',
        dataType: 'text',
        data: {

            cancer : gtissue,
			gene   : ggene,
			variant: gmutation
        },
        success: function(data1) {
			
			if((data1=="1")||(!data1)){
				alert("There is no narrative yet");
				if(admin==1){
		$("#adminEditB").text("All Comments").hide();
		$('#nardiv').attr('contenteditable','true');
		//$("#nardiv").css("background-color","white");
	    $("#adminSaveB").hide();
		$("#adminNewB").hide();
	}
	else{
		
		$("#adminEditB").text("Edit").hide();
		$("#adminSaveB").hide();
		$("#adminNewB").hide();
		
		
	}
	$("#versionlist").hide();
	$("#nardiv").hide();
				return false;
				
			}
			
			if(data1){
              $("#nardiv").html(data1);
			 // $("#nardiv").show();
			  $("#adminModify").hide();
	if(admin==1){
		$("#adminEditB").text("All Comments").hide();
		$('#nardiv').attr('contenteditable','true');
		//$("#nardiv").css("background-color","white");
	    $("#adminSaveB").show();
		$("#adminNewB").show();
	}
	else{
		
		$("#adminEditB").text("Edit").hide();
		$("#adminSaveB").hide();
		$("#adminNewB").hide();
		
		
	}
	$("#nardiv").show();
	loadnarrativeTable();
	$("#versionlist").show();
			}
			
            return false;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Parse error");
        }
    });
}

function addcellList(tissue) {
    $.ajax({
        type: 'POST',
        url: 'getgenes',
        dataType: 'text',
        data: {
            cancer: tissue
        },
        success: function(data1) {
            var celllineList = data1.split("\n");
            $("#geneselect").empty();
            var ddl = $("#geneselect");
            ddl.append("<option value='3'>Please select gene</option>");
            for (k = 0; k < celllineList.length; k++)
                ddl.append("<option value='" + celllineList[k] + "'>" + celllineList[k] + "</option>");
            return false;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Parse error");

        }
    });
}

function addMutationList(tissue, gene) {
    $.ajax({
        type: 'POST',
        url: 'getgenemutations',
        dataType: 'text',
        data: {
            cancer: tissue,
            gene: gene
        },
        success: function(data1) {
            var celllineList = data1.split("\n");
            $("#mutationselect").empty();
            var ddl = $("#mutationselect");
            ddl.append("<option value='1'>Please select mutation</option>");
            for (k = 0; k < celllineList.length; k++)
                ddl.append("<option value='" + celllineList[k] + "'>" + celllineList[k] + "</option>");
            return false;

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Parse error");

        }
    });

}




var curdiv = "#nardiv";

var editdiv="#editoriv";




  
function addList() {
    $.ajax({
        type: 'POST',
        url: 'gettumor',
        dataType: 'text',
        success: function(data1) {
            var tissueList = data1.split("\n");
            $("#tumorTypeselect").empty();
            var ddl = $("#tumorTypeselect");
            ddl.append("<option value='2'>Please select tumor type</option>");
            for (k = 0; k < tissueList.length; k++)
                ddl.append("<option value='" + tissueList[k] + "'>" + tissueList[k] + "</option>");
            return false;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Parse error");
        }
    });


}
function showAnnotation(){
	//alert("aavv");
		gtissue   = $("#tumorTypeselect option:selected").text();
	
		    ggene     = $("#geneselect option:selected").text();
		        gmutation = $("#mutationselect option:selected").text();
	        	var url="https://lih16.u.hpc.mssm.edu/pipeline/js/cancerVariantCuration/CancerVarCuation_forViewer.php?cancer="+gtissue+"&gene="+ggene+"&mutation="+gmutation;
		        		window.open(url, 'window name', 'window settings')
		        		   // window.location.href="https://lih16.u.hpc.mssm.edu/pipeline/js/cancerVariantCuration/CancerVarCuation_forViewer.php?cancer="+gtissue+"&gene="+ggene+"&mutation="+gmutation;
		        		   	//window.location.href ="https://www.google.com";
		        		   		
		        		   		}
