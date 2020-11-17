package com.avlijacode.javascript3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping(value={"/", "/index"}, method = RequestMethod.GET)
    public ModelAndView adminPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }
    
    @RequestMapping(value={"/hex"}, method = RequestMethod.GET)
    public ModelAndView hexPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hex");
        return modelAndView;
    }
    

    @RequestMapping(value={"/counter"}, method = RequestMethod.GET)
    public ModelAndView counterPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("counter");
        return modelAndView;
    }
    
    @RequestMapping(value={"/reviews"}, method = RequestMethod.GET)
    public ModelAndView reviewsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("reviews");
        return modelAndView;
    }
    
    @RequestMapping(value={"/navbar"}, method = RequestMethod.GET)
    public ModelAndView navbarPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("navbar");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/sidebar"}, method = RequestMethod.GET)
    public ModelAndView sidebarPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("sidebar");
        return modelAndView;
    }
    

    @RequestMapping(value={"/modal"}, method = RequestMethod.GET)
    public ModelAndView modalPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("modal");
        return modelAndView;
    }

    @RequestMapping(value={"/questions"}, method = RequestMethod.GET)
    public ModelAndView questionsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("questions");
        return modelAndView;
    }
    

    @RequestMapping(value={"/menu"}, method = RequestMethod.GET)
    public ModelAndView menuPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("menu");
        return modelAndView;
    }
    
    @RequestMapping(value={"/video"}, method = RequestMethod.GET)
    public ModelAndView objectsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("video");
        return modelAndView;
    }
    
    @RequestMapping(value={"/scroll"}, method = RequestMethod.GET)
    public ModelAndView jsonPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("scroll");
        return modelAndView;
    }
    

    @RequestMapping(value={"/tabs"}, method = RequestMethod.GET)
    public ModelAndView tabsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("tabs");
        return modelAndView;
    }
    
    /*
    @RequestMapping(value={"/interval"}, method = RequestMethod.GET)
    public ModelAndView intervalPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("interval");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/animation"}, method = RequestMethod.GET)
    public ModelAndView animationPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("animation");
        return modelAndView;
    }
    
    @RequestMapping(value={"/apis"}, method = RequestMethod.GET)
    public ModelAndView apisPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("apis");
        return modelAndView;
    }
    
    @RequestMapping(value={"/ajax"}, method = RequestMethod.GET)
    public ModelAndView ajaxPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("ajax");
        return modelAndView;
    }
    
    @RequestMapping(value={"/canstore"}, method = RequestMethod.GET)
    public ModelAndView canstorePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("canstore");
        return modelAndView;
    }
    
    @RequestMapping(value={"/starter"}, method = RequestMethod.GET)
    public ModelAndView starterPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("starter-file");
        return modelAndView;
    }
    
    @RequestMapping(value={"/acanvas"}, method = RequestMethod.GET)
    public ModelAndView acanvasPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("acanvas");
        return modelAndView;
    }
    
    @RequestMapping(value={"/draw"}, method = RequestMethod.GET)
    public ModelAndView drawPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("draw");
        return modelAndView;
    }
    
    @RequestMapping(value={"/cube"}, method = RequestMethod.GET)
    public ModelAndView cubePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("3Dcube");
        return modelAndView;
    }
    
    @RequestMapping(value={"/media"}, method = RequestMethod.GET)
    public ModelAndView mediaPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("media");
        return modelAndView;
    }
    
    @RequestMapping(value={"/storage"}, method = RequestMethod.GET)
    public ModelAndView storagePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("storage");
        return modelAndView;
    }
    
    @RequestMapping(value={"/notes"}, method = RequestMethod.GET)
    public ModelAndView notesPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("notes");
        return modelAndView;
    }
    */
}