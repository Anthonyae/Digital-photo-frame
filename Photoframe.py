import pyautogui

# Get the position of the mouse currently with this code
# pyautogui.position() - returns - (x,y) - NOTE:(0,0) is top left of the screen.  

# The cordinates for the screen to be clicked
# This is the right arrow for the google photos slideshow
pyautogui.click(612, 606)

for i in range(0, 1):
    # 
    pyautogui.typewrite('j',10)
