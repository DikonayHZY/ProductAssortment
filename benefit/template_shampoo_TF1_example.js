template_shampoo_TF1_example =`
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
			<div style="width: 100%; height: 70%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
				<div style="width: 80%; height: 20%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">例题：下图所示的产品是否在洗发水目录中出现过？</div>
				<div style="width: 50%; height: 65%; display: flex; align-items: center; justify-content: space-around;">
					<div style="width: 300px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: space-between; border: 1px solid black;">
						<div style="width: 100%; height: 77%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<img id="TF_pic1" src="../resource/shampoo/ALTERNA-elegant.png" style="height: 85%;">
							<p style=" font-size: 20px; line-height: 1.8;"><strong><span id="TF_name1">ALTERNA-elegant.png</span></strong></p>							
						</div>
						<div style="width: 100%; height: 23%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 20px; line-height: 1.8;">
							<p><strong>功效：</strong><span id="TF_benefit1">滋养发根</span></p>							
							<p><strong>香氛：</strong><span id="TF_attribute1">薰衣草</span></p>							

						</div>
					</div>										
				</div>
				<div style="width: 100%; height: 15%; display: flex; align-items: center; justify-content: center;"> 
					<div style="width:70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
							<input name="one_choice" type="radio" id="choice_1" value="1">
	 						<label for="choice_1"></label>	
						</div> 
	 					<p style="line-height: 2;" id="left">是</p>						
					</div>
					<div style="width:70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
							<input name="one_choice" type="radio" id="choice_2" value="2">
	 						<label for="choice_2"></label>	
						</div> 
	 					<p style="line-height: 2;" id="right">否</p>						
					</div>
				</div>
			</div>
			<div style="width: 100%; height: 30%; display: flex; flex-direction: column; align-items: center; justify-content: space-around;">
				<p style="line-height: 1.5; font-size: 18px; color:blue;">例题所示的洗发水并没有在之前商品页面中出现过（没有出现过薰衣草味或者滋养发根的洗发水），因此请选择“否”。<br>
				<span style="color: red;">但所有的题目中提供的<strong>商品信息都是正确的，没有误导信息</strong>，您只需要判断你是否见过该商品</span></p>
				<a id="next_page" href="#" style="width: 380px; height: 40px; text-align: center; font-size: 26px;">按"空格"开始正式作答</a>
			</div>			
		</div>	
	</div>
`;