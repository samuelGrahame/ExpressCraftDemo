using ExpressCraft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraftDemo
{
    public class frmDialogs : Form
    {
        protected override void OnShowed()
        {
            if (Helper.NotDesktop)
            {
                WindowState = WindowStateType.Maximized;
                AllowSizeChange = false;
                AllowMoveChange = false;
            }

            base.OnShowed();
        }
    }
}
