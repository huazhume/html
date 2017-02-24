{
	$(document).ready(function() {

		$.ajax({
			type: "get",
			url: "http://huaral.tech:9000/huaralserver/index.php",
			async: true,
//			data: {
//				'url': "url"
//			}
			dataType : "JSON",
			success: function(data, status, xhl) {
				console.log(data);
				console.log(data.msg_code);
				var arrs = data.msg_data;
				console.log(arrs);
				var siderbar = $(".sidebar");
				var div = siderbar.find("div").clone(false);
				for(var i = 0;i<arrs.length;i++){
					console.log(arrs[i].bookname);
					var dom = div.clone(false);
					dom.text(arrs[i].bookname);
					siderbar.append(dom);
				}
			}
		});

	});

}