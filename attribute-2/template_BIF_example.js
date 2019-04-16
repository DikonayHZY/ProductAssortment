template_BIF_example =`
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 22px; line-height: 2;"> 
			<p><strong>本题与你之前浏览的所有页面均无关联。</strong><br>
			   人们对于事件的解释总是有不同的方式，比如，“发抖”这种行为，有人会解释为“害怕”，而有人会解释为“寒冷”，不同的解释方式并没有褒贬对错之分。<br>
			   以下每道问题都会给出一种行为，并对这种行为给出两种解释方式，请你<strong>对两种解释方式进行评分</strong>：“1”= 完全倾向于左边，“7”= 完全倾向于右边<br>
			   <strong style="color: red;">回答不分褒贬对错</strong>，请按照真实感受来回答<br>
			   <span style="color: blue; font-size: 20px;">请看例题，如果你认为“画画”<strong>完全</strong>是一种“消遣时间”的行为，那么请选择“1”</span>
			</p>
			</div>			
		</div>

		<div style="width: 100%; height: 40%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 40%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">例题：小明买了一张彩票，他中奖的可能性有多大？</div>
			<div style="width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: space-around;"> 
				<div style="width: 100%; height: 45%; min-height: 70px; display: flex; align-items: center; justify-content: center;">
					<div style="width: 380px; height: 100%; display: flex; flex-direction: column; align-items: flex-end; justify-content: center;">
						<p id="left" style="font-size: 22px;"></p>
						<div style="width: 20px; height: 20px;">							
						</div> 						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
						<p style="font-size: 20px; color: blue;">1</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_1" value="1">
	 						<label for="choice_1"></label>							
						</div> 						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">2</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_2" value="2">
	 						<label for="choice_2"></label>							
						</div> 											
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">3</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_3" value="3">
	 						<label for="choice_3"></label>							
						</div> 										
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">4</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_4" value="4">
	 						<label for="choice_4"></label>							
						</div> 											
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">5</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_5" value="5">
	 						<label for="choice_5"></label>							
						</div> 											
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">6</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_6" value="6">
	 						<label for="choice_6"></label>							
						</div> 											
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
						<p style="font-size: 20px; color: blue;">7</p>
						<div class="TF_radio_box" style="width: 20px; height: 20px;">
	 						<input name="one_choice" type="radio" id="choice_7" value="7">
	 						<label for="choice_7"></label>							
						</div> 											
					</div>
					<div style="width: 380px; height: 100%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center;">
						<p id="right" style="font-size: 22px;"></p>
						<div style="width: 20px; height: 20px;">							
						</div> 						
					</div>
				</div>
				<div style="width: 47%; height: 55%; display: flex; align-items: flex-start; justify-content: center;">
					<p>中立</p>
				</div>
			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 380px; height: 40px; text-align: center; font-size: 26px;/*visibility: hidden*/;">按"空格"进入正式作答</a>
		</div>		
	</div>
`;