template_9_example =`
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 24px; line-height: 2;"> 
			<p><strong>本题与你之前浏览的所有页面均无关联</strong><br>
			   请仔细阅读下列描述，并<strong>判断事件发生的可能性</strong>：“1”= 非常不可能，“9”= 非常可能<br>
			   <strong style="color: red;">回答不分对错</strong>，请按照真实感受来回答<br>
			   <span style="color: blue; font-size: 20px;">请看例题，如果你认为小明非常不可能中奖，那么请选择“1”——非常不可能</span>
			</p>
			</div>			
		</div>

		<div style="width: 100%; height: 40%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 40%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">例题：小明买了一张彩票，他中奖的可能性有多大？</div>
			<div style="width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: space-around;"> 
				<div style="width: 100%; height: 45%; min-height: 70px; display: flex; align-items: center; justify-content: center;">
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_1" value="1">
	 						<label for="choice_1"></label>							
						</div> 
						<p style="line-height: 2;">1</p>
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_2" value="2">
	 						<label for="choice_2"></label>							
						</div> 
						<p style="line-height: 2;">2</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_3" value="3">
	 						<label for="choice_3"></label>							
						</div> 
						<p style="line-height: 2;">3</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_4" value="4">
	 						<label for="choice_4"></label>							
						</div> 
						<p style="line-height: 2;">4</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_5" value="5">
	 						<label for="choice_5"></label>							
						</div> 
						<p style="line-height: 2;">5</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_6" value="6">
	 						<label for="choice_6"></label>							
						</div> 
						<p style="line-height: 2;">6</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_7" value="7">
	 						<label for="choice_7"></label>							
						</div> 
						<p style="line-height: 2;">7</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_8" value="8">
	 						<label for="choice_8"></label>							
						</div> 
						<p style="line-height: 2;">8</p>					
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_9" value="9">
	 						<label for="choice_9"></label>							
						</div> 
						<p style="line-height: 2;">9</p>					
					</div>
				</div>
				<div style="width: 47%; height: 55%; display: flex; align-items: flex-start; justify-content: space-between;">
					<p id="left">非常不可能</p>
					<p>中立</p>
					<p>&ensp;<span id="right">非常可能</span>&ensp;</p>
				</div>
			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 380px; height: 40px; text-align: center; font-size: 26px;/*visibility: hidden*/;">按"空格"开始正式作答</a>
		</div>		
	</div>
`;