template_TF1 = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
			<div style="width: 100%; height: 80%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
				<div style="width: 80%; height: 20%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">下图所示的茶叶是否在茶叶目录中出现过？</div>
				<div style="width: 50%; height: 65%; display: flex; align-items: center; justify-content: space-around;">
					<div style="width: 300px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: space-between; border: 1px solid black;">
						<div style="width: 100%; height: 77%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
							<img src="../resource/shampoo/ALTERNA-PB.png" style="height: 85%;">
							<p id="pic1_name" style=" font-size: 20px; line-height: 1.8;"><strong>ALTERNA-PB</strong></p>							
						</div>
						<div style="width: 100%; height: 23%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 20px; line-height: 1.8;">
							<p><strong>品类：</strong><span id="tea_assortment">绿茶</span></p>							
							<p><strong>功效：</strong><span id="tea_benefit">减肥瘦身</span></p>							
						</div>
					</div>										
				</div>
				<div style="width: 100%; height: 15%; display: flex; align-items: center; justify-content: center;"> 
						<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
	 						<input name="one_choice" type="radio" id="choice_1" value="1">
	 						<label for="choice_1"><p>是</p></label>						
						</div>
						<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
	 						<input name="one_choice" type="radio" id="choice_2" value="0">
	 						<label for="choice_2"><p>否</p></label>						
						</div>
				</div>
			</div>
			<div style="width: 100%; height: 15%; display: flex; align-items: center; justify-content: center;">
				<a id="next_page" href="#" style="width: 160px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">下一题</a>
			</div>			
		</div>	
	</div>
`;