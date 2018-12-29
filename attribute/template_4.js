template_4 = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 25%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
			<div style="width: 80%; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 24px; line-height: 2;"> <p>请仔细阅读下列问题，并选择最能表达你心中感受的数字。<strong style="color: red;">答案没有对错之分</strong>，请按照真实感受来回答：<br>“1”= 非常不赞同, “4” = 非常赞同</p>
</div>			
		</div>

		<div style="width: 100%; height: 55%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><!-- 题目部分 -->
			<div style="width: 80%; height: 30%; display: flex; align-items: flex-end; justify-content: center; font-size: 26px; line-height: 1.5;" id="content">我感觉完成产品选择的任务需要进行较多的思考
</div>
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
				</div>
				<div style="width: 22%; height: 50%; display: flex; align-items: flex-start; justify-content: space-between;">
					<p id="left">非常不符合</p>
					<p id="right">非常符合</p>
				</div>



			</div>
		</div>
		<div style="width: 100%; height: 20%; display: flex; align-items: center; justify-content: center;">
			<a id="next_page" href="#" style="width: 200px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">按“空格”翻页</a>
		</div>		
	</div>
`;