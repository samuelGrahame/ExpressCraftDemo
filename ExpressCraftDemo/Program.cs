using ExpressCraft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraftDemo
{
    public class Program
    {
        public static void Main()
        {
            Settings.AllowCloseWithoutQuestion = true;

            Application.Run(new frmHub());
        }
    }
}
