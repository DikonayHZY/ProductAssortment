template_7 = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 25%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 24px; line-height: 2;"> 请根据真实感受回答下面的问题：<br>“1”= 完全不相似, “7” = 非常相似</div>			
		</div>

		<div style="width: 100%; height: 55%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 30%; display: flex; align-items: flex-end; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">在完成选择任务之时, 我感觉有较多的可选产品</div>
			<div style="width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: space-around;"> 
				<div style="width: 100%; height: 50%; min-height: 80px; display: flex; align-items: center; justify-content: center;">
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_1" value="1">
 						<label for="choice_1">1</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_2" value="2">
 						<label for="choice_2">2</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_3" value="3">
 						<label for="choice_3">3</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_4" value="4">
 						<label for="choice_4">4</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_5" value="5">
 						<label for="choice_5">5</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_6" value="6">
 						<label for="choice_6">6</label>						
					</div>
					<div style="width: 70px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"> 
 						<input name="one_choice" type="radio" id="choice_7" value="7">
 						<label for="choice_7">7</label>						
					</div>										
				</div>
				<div style="width: 36%; height: 50%; display: flex; align-items: flex-start; justify-content: space-between;">
					<p>完全不相似</p>
					<p>非常相似</p>
				</div>



			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 200px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">按“空格”翻页</a>
		</div>		
	</div>
`;