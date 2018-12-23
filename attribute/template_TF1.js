template_TF1 =`
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
			<div style="width: 100%; height: 80%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
				<div style="width: 80%; height: 20%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">下图所示的茶叶是否在茶叶目录中出现过？</div>
				<div style="width: 50%; height: 65%; display: flex; align-items: center; justify-content: space-around;">
					<div style="width: 300px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: space-between; border: 1px solid black;">
						<div style="width: 100%; height: 77%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<img id="TF_pic1" src="../resource/shampoo/ALTERNA-PB.png" style="height: 85%;">
							<p style=" font-size: 20px; line-height: 1.8;"><strong><span id="TF_name1">ALTERNA-PB</span></strong></p>							
						</div>
						<div style="width: 100%; height: 23%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 20px; line-height: 1.8;">
							<p><strong>品类：</strong><span id="TF_attribute1">绿茶</span></p>							
							<p><strong>功效：</strong><span id="TF_benefit1">减肥瘦身</span></p>							
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
			<div style="width: 100%; height: 15%; display: flex; align-items: center; justify-content: center;">
				<a id="next_page" href="#" style="width: 160px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">下一题</a>
			</div>			
		</div>	
	</div>
`;