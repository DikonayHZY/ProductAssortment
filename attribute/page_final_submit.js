page_final_submit =`
	<div style="width: 100%; height: 100%; position: fixed; display: flex; align-items: center; justify-content: center; flex-direction: column;">
		<div style="width: 70%; height: 20%; display: flex; align-items: center; justify-content: center; font-size: 24px; line-height: 2;"><!-- 描述文字 -->
			您已经完成所有实验任务，非常感谢您的参与！<br>
			最后，请认真准确填写下表，随后点击按钮保存数据。如遇任何问题，请及时联系主试。
		</div>
		<div style="width: 70%; height: 55%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 20px; line-height: 2;"><!-- 表单 -->
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 姓名 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">姓名：</div>
				<input type="text" name="username" autocomplete="off" oninput="value=value.replace(/[\\s]/g,'')" style="width: 196px; height: 36px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
			</div>
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 性别 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">性别：</div>
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
					&emsp;
					<input type="radio" name="gender" value="1">男
					&emsp; &emsp; 
					<input type="radio" name="gender" value="0">女
				</div>

			</div>
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 年龄 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">年龄：</div>
				<input type="text" name="age" placeholder="只填写数字" autocomplete="off" oninput="value=value.replace(/[^\\d]/g,'')" style="width: 196px; height: 36px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;"> 
			</div>			
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 专业 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">专业：</div>
				<input type="text" name="major" placeholder="如：应用化学" autocomplete="off" oninput="value=value.replace(/[\\s]/g,'')" style="width: 196px; height: 36px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
			</div>
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 所在年级 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">所在年级：</div>
				<select name="grade" placeholder="如：应用化学" style="width: 200px; height: 40px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px; ">
					<option value="" disabled selected hidden style="text-align: center;">请选择所在年级</option>
					<option value ="中学生">中学生</option>
					<option value ="大一">大一</option>
					<option value="大二">大二</option>
					<option value="大三">大三</option>
					<option value="大四">大四</option>
					<option value="硕士研究生">硕士研究生</option>
					<option value="博士研究生">博士研究生</option>
					<option value="在职学生">在职学生</option>
					<option value="工作">工作</option>											
				</select>
			</div>	
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 手机号码 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">手机号码：</div>
				<input type="text" name="phone" autocomplete="off" oninput="value=value.replace(/[^\\d|-|+]/g,'')" style="width: 196px; height: 36px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
			</div>
			<div style="width: 100%; height: 80px; display: flex; align-items: center;"><!-- 实验目的 -->
				<div style="width: 200px; height: 100%; display: flex; align-items: center; justify-content: flex-end;">实验目的：</div>
				<input type="text" name="purpose" autocomplete="off" placeholder="您认为本次是实验目的是？" oninput="value=value.replace(/[\\s]/g,'')" style="width: 700px; height: 36px; display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
			</div>
	

		</div>
			
		
		<div style="width: 100%; height: 25%; display: flex; align-items: center; justify-content: center;"><!-- 提交 -->
			<a id="next_phrase" href="#" style="width: 210px; height: 40px; border: 2px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;">点我保存(*^▽^*)</a>
		</div>		
	</div>
`;
