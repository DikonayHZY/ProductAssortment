# coding=utf-8
# brief: get all data from current directory
# author: charleycao
# version: 1.0
# date: 2019-01-13

import time, os, sys
import json
import codecs

def get_all_files(dir, extention):
    ret_files = []
    try:
        for (root, dirs, files) in os.walk(dir):
            for filename in files:
                (file_path, temp_filename) = os.path.split(filename)
                (file_name, file_extension) = os.path.splitext(temp_filename)
                if file_extension.lower() == extention.lower():
                    file = os.path.join(root, filename)
                    ret_files.append(file)
                    print u"检测到文件: %s" % file
    except Exception,e:
        print u"！！！警告！！！[get_all_files]异常: %s" % e
    return ret_files

def parse_files(files):
    ret_string = []
    for file in files:
        try:
            print u"正在解析文件: %s" % (file)
            with open(file, 'r') as f:
                content = f.read()
                content = content.decode('utf-8-sig') if content.startswith(codecs.BOM_UTF8) else content
                data = json.loads(content, encoding='utf8')
                output = data["output"]
                ret_string.append(output)
        except Exception, e:
            print u"！！！警告！！！[parse_files]格式非法: %s, %s" % (file, e)
    return ret_string

def output_strings(filename, strings):
    try:
        with codecs.open(filename, 'w', encoding='utf-8') as f:
            for string in strings:
                f.write(string + u"\n")
        return True
    except Exception, e:
        print u"！！！警告！！！[output_strings]写入文件失败: %s, %s" % (filename, e)
        return False

if __name__ == u"__main__":
    reload(sys)
    sys.setdefaultencoding("utf-8")
    search_directory = u"./"                    # 搜索当前文件夹下所有文件
    search_extention = u".json"                 # 搜索文件后缀名
    output_file = u"%s_data.txt" % (time.strftime('%Y-%m-%d_%H-%M-%S', time.localtime()))      # 输出文件
    print u"搜索目录: %s, 搜索文件类型: %s, 输出文件: %s" % (search_directory, search_extention, output_file)
    print u"...正在搜索文件..."
    files = get_all_files(search_directory, u".json")
    print u"...正在解析文件..."
    strings = parse_files(files)
    print u"...正在输出文件..."
    result = output_strings(output_file, strings)
    if(result):
        print u"成功写入文件: %s" % (output_file)
    else:
        print u"失败！"
