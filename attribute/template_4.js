template_4 = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 24px; line-height: 2;"> 
			<p>请仔细读题，根据题意回忆刚才的感受<br>
			选择<strong>最能表达你真实感受</strong>的数字：“1”= 非常不同意，“4”= 非常同意<br>
			<strong style="color: red;">回答不分对错</strong>，请按照真实感受来回答</p>
			</div>			
		</div>

		<div style="width: 100%; height: 40%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 40%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">小张打开电子邮箱后收到垃圾邮件</div>
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
				</div>
				<div style="width: 21%; height: 55%; display: flex; align-items: flex-start; justify-content: space-between;">
					<p id="left">非常不符合</p>
					<p>&ensp;<span id="right">非常符合</span></p>
				</div>



			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 200px; height: 40px; text-align: center; font-size: 26px;/*visibility: hidden*/;">按“空格”翻页</a>
		</div>		
	</div>
`;