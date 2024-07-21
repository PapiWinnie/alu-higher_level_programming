This directory contains my project on Python input-output functions. The open() function is used to obtain a file object and typically takes two positional arguments and one optional keyword argument: open(filename, mode, encoding=None). For example, f = open('workfile', 'w', encoding='utf-8') creates a file object.

To read file contents, use f.read(size) to get a specified amount of data, f.readline() to read a single line, or list(f)/f.readlines() to read all lines into a list.
