# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.29

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = C:\Users\yunom\AppData\Local\Programs\CLion\bin\cmake\win\x64\bin\cmake.exe

# The command to remove a file.
RM = C:\Users\yunom\AppData\Local\Programs\CLion\bin\cmake\win\x64\bin\cmake.exe -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/ControlArduino.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/ControlArduino.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/ControlArduino.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/ControlArduino.dir/flags.make

CMakeFiles/ControlArduino.dir/main.cpp.obj: CMakeFiles/ControlArduino.dir/flags.make
CMakeFiles/ControlArduino.dir/main.cpp.obj: E:/Learn/IOT_Quan_Trac_Moi_Truong/controller/ControlArduino/main.cpp
CMakeFiles/ControlArduino.dir/main.cpp.obj: CMakeFiles/ControlArduino.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/ControlArduino.dir/main.cpp.obj"
	C:\Users\yunom\AppData\Local\Programs\CLion\bin\mingw\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/ControlArduino.dir/main.cpp.obj -MF CMakeFiles\ControlArduino.dir\main.cpp.obj.d -o CMakeFiles\ControlArduino.dir\main.cpp.obj -c E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\main.cpp

CMakeFiles/ControlArduino.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/ControlArduino.dir/main.cpp.i"
	C:\Users\yunom\AppData\Local\Programs\CLion\bin\mingw\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\main.cpp > CMakeFiles\ControlArduino.dir\main.cpp.i

CMakeFiles/ControlArduino.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/ControlArduino.dir/main.cpp.s"
	C:\Users\yunom\AppData\Local\Programs\CLion\bin\mingw\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\main.cpp -o CMakeFiles\ControlArduino.dir\main.cpp.s

# Object files for target ControlArduino
ControlArduino_OBJECTS = \
"CMakeFiles/ControlArduino.dir/main.cpp.obj"

# External object files for target ControlArduino
ControlArduino_EXTERNAL_OBJECTS =

ControlArduino.exe: CMakeFiles/ControlArduino.dir/main.cpp.obj
ControlArduino.exe: CMakeFiles/ControlArduino.dir/build.make
ControlArduino.exe: CMakeFiles/ControlArduino.dir/linkLibs.rsp
ControlArduino.exe: CMakeFiles/ControlArduino.dir/objects1.rsp
ControlArduino.exe: CMakeFiles/ControlArduino.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable ControlArduino.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\ControlArduino.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/ControlArduino.dir/build: ControlArduino.exe
.PHONY : CMakeFiles/ControlArduino.dir/build

CMakeFiles/ControlArduino.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\ControlArduino.dir\cmake_clean.cmake
.PHONY : CMakeFiles/ControlArduino.dir/clean

CMakeFiles/ControlArduino.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug E:\Learn\IOT_Quan_Trac_Moi_Truong\controller\ControlArduino\cmake-build-debug\CMakeFiles\ControlArduino.dir\DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/ControlArduino.dir/depend

