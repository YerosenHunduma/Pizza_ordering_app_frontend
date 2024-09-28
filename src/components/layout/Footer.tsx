import { IconButton } from '@mui/material';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="text-center gap-4 md:flex  justify-between mx-6">
                <div className=" md:flex justify-between items-center gap-3 font-urbanist">
                    <p className="text-sm">&copy;2024 Pizza All Rights Reserved.</p>
                    <p className="text-sm ">Terms & Conditions</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <IconButton color="inherit" className="bg-#141414" href="#">
                        <Facebook fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit" className="bg-#141414" href="#">
                        <LinkedIn fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit" className="bg-#141414" href="#">
                        <Twitter fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit" className="bg-#141414" href="#">
                        <YouTube fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
